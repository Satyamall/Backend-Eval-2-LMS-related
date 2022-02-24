# Backend-Eval-2-LMS-related

**Create a user collection which has following fields**
- name
- email
- password
- profile_photo_url
- roles ( student | admin | instructor )
**Create a student collection which has following fields**
 - roll_number
 - user ( references the user collection with user_id)
 - batch
 
 **Create a lectures collection which has following fields**
 - title
 - author_id ( references the user collection )
 - batch
 - 
**user should have instructor, student and admin roles Create a user registration flow which contains below APIs**

**Also allow the user to use register and login ( when creating the account and then log them in)**

**use jwt tokens**

**use bearer tokens for authentication**

**use middlewares for authorization**

**wherever necessary check if the user is the author**

**Create below lectures endpoints**
 - post "/users" => which will create a user and also the profile_photo has to be uploaded along with suitable role.
 - post "/lectures" => add a new book ( authentication required and only instructors and admins can create a new lecture)
 - get "/lectures" => get all lectures ( authentication not required for this endpoint).
 - patch "/lectures/:lecture_id" ( authentication required and only the instructor who created the lecture or admin can update a lecture )
 - delete "/lectures/:lecture_id" ( authentication required and only the instructor who created the lecture or admin can delete the lecture)
 - get "/lectures/:id" ( authentication not required )

**PLEASE NOTE :-** MVC architecture has to be followed.
