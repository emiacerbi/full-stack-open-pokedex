## Exercise 11.1

### Common steps in a CI setup for Python:

- Linting with pylint to checks for errors, enforces a coding standard. It can also make suggestions about how the code could be refactored.
- For unit testing, pytest looks like a great tool for the job. 
- For integration testing, I think the Robot Framework would be a great tool, since it was created for the purpose of automated testing  and works great with python. 

All of these steps would run on a Github Actions workflow to ensure that all is working correctly. Ideally this would be done on a testing branch to avoid merging breaking changes to the main branch. This would allow for the deploy to be safe and always online. 

### Alternatives to Github Actions and Jenkins:
From what I've found, I think one of the best tools for this job would be Travis CI. Amongst other features, it let's you integrate with Github, auto deploy on passing builds, and it has simple syntax.

### CI Environment: 
For an earlier project, I think using a cloud-hosted setup would be better, since the environment is not something you need to worry about. It's there, all you need to do is tell it what to do. As the project scales, and the limitations of a cloud based setup start to show, then the team could consider transitioning to a self hosted environment, where they would need more resources and custom setups.
