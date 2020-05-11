# lenasys_contribution

Demo available at https://c14jonfr.github.io/lenasys_contribution/

![image](https://user-images.githubusercontent.com/49141758/81530955-24b2d800-9362-11ea-8961-fd6fcf19800f.png)

This is a personal project created as a (temporary) replacement for the Personal Progress Tool used for the course Projekt i Software Engineering vid Högskolan i Skövde.

There is a tool that is to be used to view your contribution statistics for the LenaSYS project (Personal Progress Tool) but this is currently not working. There are a few key differences between the Personal Progress Tool and this project:
- The Personal Progress Tool uses web scraping. This project uses the Github API (at least for now).
- This project is only for personal statistics. The Personal Progress Tool would also display a ranking displaying how you place compared with other students in the course.
- This project will only display what your contribution statistics look like *right now*. The Personal Progress Tool, as the name suggests, would display stats on a weekly basis thus showing how your progress looks throughout the course.

This tool will display statistics for:
- Commits (total number of commits that have been merged to the master branch, commits made to other branches will not count unless the branch is merged to the master branch)
- Issues created (total number of issues where you are the author)
- Issues Completed (total number of issues that you are assigned to that have been *closed*)
- Issue comments (total number of comments you have left on issues)

All of these stats are counted from 2020-03-30 (date of course start for 2020 course version) and only counts stats for contribution to the LenaSYS repository on github.

Since there is currently no authentication implemented which means the hourly request limit is 60. Feel free to fork this project and implement your own authentication if you need more request (limit is increased to 5000/h with authentication). See Github API documentation for instructions.

Built using HTML, CSS and JS. Design based on LenaSYS.
