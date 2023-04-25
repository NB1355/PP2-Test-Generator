# Test Generator
## PPII: JavaScript / Interactive web page
#
![Alt text](assets/images/idea.jpg)

## Requirments
### - Generate Random Selection 
* from default data set in JSON format
* input number min:2 max: number of questions in dataset  
### - Process and score the questioner
### - timer
* input seconds per question min:2 max:20 default:5
* option to ignore the limit 
### - Show Results
### - Run in exam or learn mode

|                  | Exam                  | Learn                |
| -------          | ---------             |-------------         |
| Timer            | countdown limit       | keep the time        |
| end in time      | optional              | not available        |
| manual timer     | not available         | start, stop, reset   |
| see the ansewrs  | not available         | hidden when loading questions   |
| submit           | 
 
#
# Development
## Commit rules
* ADD = Create a capability 
* CUT = Remove a capability 
* FIX = Fix 
* TST= Test 
* OPT = Refactor of performance
* DOC = Refactor of documentation


# TESTS

## Tested and Fixed https://nb1355.github.io/PP2-Test-Generator

| Ref        | Status | Commit  | Checkd     |  Tool             | Note                               |    
|------------|--------|---------|------------|-------------------|------------------------------------|
| Dev-001-01 | F      | 3edbdb4 | code       | jshint            | 6 warn, 20 under., 5 unused        |
| Dev-001-02 | p-     | d13fb63 | code, live | jshint            | 0 warn, remaining html def's       |
| Dev-002-01 | p-     | 3edbdb4 | live       | Lighthouse Perf.  | 0 error, 1 warn, ::interest-cohort |
| Dev-003-01 | F      | 3edbdb4 | code       | W3C Html          | 21 error , 6 warn                  |
| Dev-003-02 | Pass   | 138c3e5 | code, live | W3C Html          | no issue, all solved               |
| Dev-004-01 | Pass   | 3edbdb4 | code, live | W3C CSS           | no issue found                     |
| Dev-005-01 | Pass   | 3edbdb4 | live       | ui.dev            | https://ui.dev/amiresponsive       |  
| Dev-006-01 | Pass   | 3edbdb4 | live       | Lighthouse Perf.  |                                    |


Final TEST Snapshots
|   |   |
|----------------------------------------------------|----------------------------------------------------|
| ...                                                   | Responsivity                                    |
|   ![Test snapshot](assets/images/...)              |  ![Test snapshot](assets/images/Dev-005-01.jpg)    |
|||
| Performance                                        | javascript                                         |
|   ![Test snapshot](assets/images/Dev-006-01.jpg)   |  ![Test snapshot](assets/images/Dev-001-02.jpg)    |
|| 
| html                                               | css                                                |
|   ![Test snapshot](assets/images/Dev-003-02.jpg)   |  ![Test snapshot](assets/images/Dev-004-01.jpg)    |
|||  




