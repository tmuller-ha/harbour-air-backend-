import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'ai-text-field',
      pluginId: 'ai-text-field',
      type: 'string',
      icon: PluginIcon,
      intlLabel: {
        id: 'ai-text-field.label',
        defaultMessage: 'AI Text Field',
      },
      intlDescription: {
        id: 'ai-text-field.description',
        defaultMessage: 'A custom field for AI text input',
      },
      components: {
        Input: async () => import('./components/AiTextfield'),
      },
    });

    app.registerPlugin({
      id: 'ai-text-field',
      initializer: Initializer,
      isReady: false,
      name: 'ai-text-field',
    });
  },
};
