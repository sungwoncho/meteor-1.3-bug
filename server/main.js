import 'github/api/v3.0.0';
import 'github/api/v3.0.0/gists';
import 'github/api/v3.0.0/gitdata';
import 'github/api/v3.0.0/issues';
import 'github/api/v3.0.0/authorization';
import 'github/api/v3.0.0/orgs';
import 'github/api/v3.0.0/statuses';
import 'github/api/v3.0.0/pullRequests';
import 'github/api/v3.0.0/repos';
import 'github/api/v3.0.0/events';
import 'github/api/v3.0.0/user';
import 'github/api/v3.0.0/releases';
import 'github/api/v3.0.0/search';
import 'github/api/v3.0.0/markdown';
import 'github/api/v3.0.0/gitignore';
import 'github/api/v3.0.0/misc';
import GithubAPI from 'github';

let github = new GithubAPI({version: '3.0.0'});
console.log(github);
