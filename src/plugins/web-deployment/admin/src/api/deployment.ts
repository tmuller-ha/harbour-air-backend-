import axios from 'axios';

/**
 * // TODO: Need to move these values to env or conf file
 */
const GITHUB_TOKEN = process.env.STRAPI_ADMIN_GITHUB_TOKEN;
const REPO_OWNER = 'tmuller-ha';
const REPO_NAME = 'harbour-air-frontend-';
const WORKFLOW_ID = 'deploy-cron-5.yml';

const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github.v3+json',
};

interface DeploymentType {
  id: number;
  user: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

type DeploymentResponse = {
  data: DeploymentType;
};

const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/${WORKFLOW_ID}/runs`;

const deploymentService = {
  async createDeployment(deployment: any): Promise<DeploymentResponse> {
    return axios.post('/api/web-deployment/deployment', deployment);
  },

//   getDeployments: async (query: string) => {
//     return await request(`/api/web-deployment/deployment?${query}`, {
//       method: 'GET',
//     });
//   },

  /**
   * // TODO: This function is to be modified to get the status of the workflow runs
   */
  async getWorkFlowStatus() {
    return axios
      .get(url, { headers })
      .then((response) => {
        if (response.status === 200) {
          const workflowRuns = response.data.workflow_runs;
          workflowRuns.forEach((run: any) => {
            if (run.status === 'in_progress') {
              console.log(`Workflow run ${run.id} is currently in progress.`);
            } else if (run.status === 'queued') {
              console.log(`Workflow run ${run.id} is currently queued.`);
            } else {
              console.log(`Workflow run ${run.id} has status: ${run.status}.`);
            }
          });
        } else {
          console.log(`Unexpected response status: ${response.status}`);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(`Failed to get workflow runs: ${error.response.status}`);
          console.log(error.response.data);
        } else {
          console.log(`Error: ${error.message}`);
        }
      });
  },

  async triggerDeploy(id: string) {
    const payload = {
      ref: 'main', // The branch to run the workflow on
      inputs: {
        id,
      },
    };
    return axios.post(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/triggered-workflow.yml/dispatches`,
      payload,
      { headers }
    );
  },
};

export default deploymentService;
