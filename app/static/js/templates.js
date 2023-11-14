// ---------------- RENDER FUNCTIONS ------------------
// Function to render repositories as a table
function QLrenderRepositories(repos_data) {
    const reposElement = $('#repositories');
    
    if (repos_data.length === 0) {
        reposElement.html('<p style="text-align: center">No repositories found.</p>');
        return;
    }
  
    const reposTable = `
        <h2>Repositories (${repos_data.length}):</h2>
        <div class='table-view'>
        <table class="searchable sortable">
            <thead>
                <tr>
                    <th scope='row' style='text-align: left'>Name</th>
                    <th scope='row' style='text-align: left'>Description</th>
                    <th scope='row' style='min-width: 100px'>Maintenance duration</th>
                    <th scope='row'>Commits</th>
                    <th scope='row'>Size</th>
                    <th scope='row'>Language</th>
                    <th scope='row'>Forks</th>
                    <th scope='row'>Stars</th>
                </tr>
            </thead>
            <tbody>
                ${repos_data.map(repo => `
                    <tr>
                        <td style='text-align: left'><a href='https://github.com/${username}/${repo.name}' target='_blank'>${repo.name}</a></td>
                        <td style='text-align: left'>${repo.description}</td>
                        <td>${timeDeltaHM(repo.createdAt, repo.updatedAt)}</td>
                        <td>${repo.defaultBranchRef?.target.history.totalCount ?? 'null'}</td>
                        <td>${repo.diskUsage}</td>
                        <td>${repo.primaryLanguage?.name ?? 'null'}</td>
                        <td>${repo.forkCount}</td>
                        <td>${repo.stargazerCount}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        </div>
    `;
    reposElement.html(reposTable);
  }


