import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Flex, Field, FieldLabel, FieldHint, FieldError } from '@strapi/design-system';
import { FieldValue, InputProps } from '@strapi/strapi/admin';
import { Box } from '@strapi/design-system';

type AiTextFieldProps = InputProps &
  FieldValue & {
    labelAction?: React.ReactNode;
  };

const AiTextField: React.FC<AiTextFieldProps> = ({
  value,
  onChange,
  name,
  label,
  labelAction,
  required,
  hint,
  placeholder,
  disabled,
  error,
}) => {
  const [userText, setUserText] = useState(value || '');
  const [aiText, setAIText] = useState('');
  const [loading, setLoading] = useState(false);

  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentEditableRef = useRef<HTMLSpanElement | null>(null);

  let enterPressed = false;

  const fetchSuggestions = (text: string) => {
    if (text.trim().length) {
      setLoading(true);
      fetch(`http://localhost:3001/api/suggestions?text=${encodeURIComponent(text)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setAIText(data.aiResponse); // Update this line to match your JSON structure
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching AI text:', error);
          setLoading(false);
        });
    }
  };

  const isCursorAtEnd = () => {
    const selection = window.getSelection();
    return selection && selection.anchorOffset === selection.anchorNode?.textContent?.length;
  };

  const handleInput = (e: React.FormEvent<HTMLSpanElement>) => {
    let newText = e.currentTarget.innerText;
    if (enterPressed && newText.endsWith('\n\n')) {
      // Remove the last newline character
      newText = newText.slice(0, -1);

      // Reset the flag
      enterPressed = false;
    }

    setUserText(newText);
    setAIText('');

    // Check if cursor is at the end
    if (isCursorAtEnd()) {
      // Debounce the API call
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        fetchSuggestions(newText);
      }, 1500);
    }

    // Call the onChange prop to update the form state
    onChange({ target: { name, value: newText } } as React.ChangeEvent<any>);
  };

  const focusContentEditable = () => {
    if (contentEditableRef.current) {
      contentEditableRef.current.focus();
    }
  };

  const setCursorToEnd = (element: HTMLElement) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false); // false means collapse to end rather than the start
    selection?.removeAllRanges();
    selection?.addRange(range);
  };

  const acceptSuggestion = () => {
    const contentEditableElement = contentEditableRef.current;
    if (aiText && contentEditableElement) {
      setUserText(userText + aiText);
      contentEditableElement.innerText = userText + aiText;
      setAIText('');
      setCursorToEnd(contentEditableElement);

      // Call the onChange prop to update the form state
      onChange({ target: { name, value: userText + aiText } } as React.ChangeEvent<any>);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      acceptSuggestion();
    }

    if (event.key === 'Enter') {
      // Set the flag to true when Enter is pressed
      enterPressed = true;

      // Allow the default Enter key behavior to occur
      setTimeout(() => {
        const contentEditableElement = contentEditableRef.current;
        if (contentEditableElement) {
          const childNodes = Array.from(contentEditableElement.childNodes);

          // Find the last <br> element
          for (let i = childNodes.length - 1; i >= 0; i--) {
            if (childNodes[i].nodeName === 'BR') {
              // Remove the last <br> element
              contentEditableElement.removeChild(childNodes[i]);
              break; // Exit the loop after removing the <br>
            }
          }

          // Insert an empty text node with a zero-width space
          const emptyTextNode = document.createTextNode('\u200B');
          contentEditableElement.appendChild(emptyTextNode);

          // Set cursor after the empty text node
          setCursorToEnd(contentEditableElement);
        }
      }, 0); // SetTimeout with delay of 0 to allow the stack to clear and the <br> to be inserted
    }
  };

  return (
    <StyledBox>
      <Container>
        <Label>Predictive Text Input</Label>
        <EditableContainer onClick={focusContentEditable}>
          <ContentEditable
            ref={contentEditableRef}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
          >
            {/* {userText} */}
          </ContentEditable>

          <SuggestionText className={aiText ? 'visible' : 'hidden'}>
            {aiText.length > 0 && (
              <>
                {aiText}
                <TabButton onClick={acceptSuggestion}>Tab</TabButton>
              </>
            )}
          </SuggestionText>
        </EditableContainer>
        <LoadingText>{loading && <div>loading ai suggestions...</div>}</LoadingText>
      </Container>
    </StyledBox>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const StyledBox = styled(Box)`
  width: 100%;
`;

const EditableContainer = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: text;
  border-radius: 8px;
  text-align: left;
  width: 100%;
  height: 200px;
  margin: 0 auto;
  overflow: auto;
`;

const ContentEditable = styled.span`
  border: 0;
  font-size: 12px;
  outline: none;
`;

const SuggestionText = styled.span`
  font-size: 12px;
  color: #888;
  transition: opacity 0.5s;
  &.hidden {
    opacity: 0;
  }
  &.visible {
    opacity: 1;
  }
`;

const TabButton = styled.span`
  border: 1px solid #ccc;
  padding: 4px 6px;
  font-size: 10px;
  margin-left: 4px;
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
`;

const LoadingText = styled.div`
  font-size: 12px;
  height: 40px;
  color: #555;
  font-style: italic;
`;

export default AiTextField;
