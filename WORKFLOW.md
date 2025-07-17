# Development Workflow

## Branching Strategy
- Use `master` for stable releases.
- Create feature branches from `master` for new features.
- Use pull requests for all merges.

## CI/CD Pipeline
- GitHub Actions run build, lint, and test workflows on push and PR.
- Automated deployment can be configured for releases.

## Code Review Process
- All code changes require review via pull request.
- At least one approval is required before merging.
- Use CODEOWNERS for reviewer assignment.

## Steps
1. Fork and clone the repo.
2. Create a feature branch.
3. Make changes and commit with clear messages.
4. Push and open a pull request.
5. Ensure all checks pass before merging.
