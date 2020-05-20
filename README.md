# lenasys_contribution

Demo available at https://c14jonfr.github.io/lenasys_contribution/

![image](https://user-images.githubusercontent.com/49141758/81530955-24b2d800-9362-11ea-8961-fd6fcf19800f.png)

This is a personal project created as a (temporary) replacement for the Personal Progress Tool used for the course Projekt i Software Engineering vid Högskolan i Skövde.

There is a tool that is to be used to view your contribution statistics for the LenaSYS project (Personal Progress Tool) but this is currently not working. There are a few key differences between the Personal Progress Tool and this project:
- The Personal Progress Tool uses web scraping. This project uses the Github API (at least for now).
- This project will only display what your contribution statistics look like *right now*. The Personal Progress Tool, as the name suggests, would display stats on a weekly basis thus showing how your progress looks throughout the course.

There are two pages, accessed from the navbar by clicking the different icons. These pages are:
- Personal statistics page. This will be a lot faster than the toplists page. If you're only interested in your own contribution (without any rankings), use this.
- Toplists page. This will take quite a long time (a lot of requests). This will display the top 10 for each of the statistics. Use this if your interested in your ranking.
- As long as the loading animation is running things should be progessing, but keep an eye on the console. If anything goes wrong you should see an error there.

This tool will display statistics for:
- Commits (total number of commits that have been merged to the master branch, commits made to other branches will not count unless the branch is merged to the master branch)
- Issues created (total number of issues where you are the author)
- Issues Completed (total number of issues that you are assigned to that have been *closed*)
- Issue comments (total number of comments you have left on issues)
- Along with the top 10 rankings for each of these, as well as your own ranking (or rather, the ranking for the user you search for)

All of these stats are counted from 2020-03-30 (date of course start for 2020 course version) and only counts stats for contribution to the LenaSYS repository on github.

Since there is currently no authentication implemented which means the hourly request limit is 60. Feel free to fork this project and implement your own authentication if you need more request (limit is increased to 5000/h with authentication). See Github API documentation for instructions.

Built using HTML, CSS and JS. Design based on LenaSYS.
