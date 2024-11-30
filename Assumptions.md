Assumptions:

1.Default Task List:
By default, the application initializes with three predefined tasks.

2.Task ID Assignment:
Each task is assigned a unique ID when it is created. The ID is generated at the time of task creation and serves as a unique identifier for each task.

3.Filter Persistence on Task Addition:
When a filter is applied to the task list, any new tasks added will be evaluated based on the existing filter conditions. The new task will only appear in the list if it satisfies the criteria set by the current filter.

4.Default Task Sorting:
Tasks in the list are, by default, sorted by the due date in ascending order (i.e., the earliest due date appears first). This default sorting remains in effect unless the user modifies it.

5.Task Descriptions:
Each task description is assumed to contain not more than 50 words. If the description exceeds 50 words, it will be truncated with an ellipsis ("...") at the end to indicate that the text is longer than displayed.

6.Empty Results
In case of empty results for a filter we have a fallback UI message for the Users.
