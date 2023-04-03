# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If I'm creating an rails application with a model called Cohort but I forget to enter the foreign key I believe I can fix this mistake by using an active record association. Using an association I can add  the foreign key to  Cohort model by connecting it to another model in the database(Student model).  The name of the foreign key is students. I think the foreign key will be on the student model

Researched answer:
I want to create a model called Cohort that stores information for all of the students in my current cohort, however I forget to add the foreign key. I need the foreign key because it allows me to create an relationship between the student and cohort tables. I want to assign a foreign key to the Cohort model. To do this I will create an active record migration which will update my database. A migration is a file that is generated through rails command that will allow me to make changes to the database. When developers are working with full-stack projects, the columns or data types required in a database table may need to be changed to accommodate for new features or account for developer errors. Since the schema file within an database cannot be directly edited , as developers we use migrations within rails to modify the shape of an existing databases in this case being the cohort database. 
We can edit the database my running a rails generate(rails g) command to create a migration. The naming conventions of my migration should  communicate the intent of my changes I wish to make.  Each migration can be considered as a 'new' version of the created database. A schema starts with a blank state and with each migration it is modified to add or remove tables, columns, and entries. Active record in rails will update db/schema.rb file to match the updated structure of my database. 
(Migration example)
class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
end
  end
end

this migration adds a table called products with string column and a text column. A primary key of id will be added implicitly ,as it is the default primary key for all active record models. 

resources : https://edgeguides.rubyonrails.org/active_record_migrations.html
https://guides.rubyonrails.org/v2.3.8/association_basics.html
https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/rails/associations.md
https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/rails/migrations.md



2. Which RESTful routes must always be passed params? Why?

Your answer: I believe the RESTful routes that will always params will be Delete. I think it's because you have to be specific about which particular data you are removing from the database. You don't want to mistakenly destroy the wrong data,so we use params as an guideline to keep our deletion inquires in alignment with our intent as developers. 

Researched answer: params i.e query strings are a way to pass in additional information into a controller method to query a database or modify the view in the server. Params allow us to add more information to our program by passing in a value into the controller method. Read(Get), Update(Put/Patch), and Delete(Delete) are the RESTFUL routes that must always be passed params because they want to affected specific data within those databases for instance an specific id for photos
example 

delete '/photos/:id' => 'photos#destroy'

resources : https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/rails/restful-routes-crud.md
https://luckyframework.org/guides/http-and-routing/routing-and-params


3. Name three rails generator commands. What is created by each?
1. 
Your answer: rails generate model will create a model class for the database.
rails generate resource will create our restful routes automatically instead of having to manually input the data.  rails generate migration will create a migration file to add information to an existing model/data. 


Researched answer: There are multiple rails generator commands. For instance, (rails generate model )creates an active record model that automatically creates the correct db migrations and boiler plate code needed for my program. (example)rails generate model NAME column_name:column_type
'NAME' is the name of the model. 'field' is the name of the column in the DB table and 'type' is the column type. 
(rails generate migration) will create a rails migration file from the terminal 

(example) rails generate migration NAME [field[:type][:index] field[:type][:index]] [options]

 after generating the migration file with any information I want to include into the table,like first_name and last_name for the data fields. I can apply these migrations by using the terminal commands : rake db:migrate and rails db:migrate
[label](https://devtut.github.io/rubyonrails/actionmailer.html)Lastly, the rails generator command  (rails generate controller) can create a new controller method, the controller method is responsible for making sense of user request and producing an appropriate output. The controller will receive the request (invisible to the developer), fetch, or save data from a model and use a view to create an visible output in HTML. 
Resources: 
https://gist.github.com/cdesch/2f8de645cad1d83aa251c0a20b0f7097
https://devtut.github.io/rubyonrails/rails-generate-commands.html#rails-generate-scaffold
https://github.com/LEARNAcademy/Syllabus/blob/main/rails/active-record-intro.md





4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

What is the name of the controller method that would be called by each route?
the name of the controller method would be Index
What action would each of the controller methods perform?
the index action would be to list all of the items in a particular model.

action: "POST" location: /students
What is the name of the controller method that would be called by each route?
the name of the controller method would be Create
What action would each of the controller methods perform?
it would create an new instance of students

action: "GET" location: /students/new

What is the name of the controller method that would be called by each route?
the name of the controller method is New
What action would each of the controller methods perform?
the action of the controller method New would be to display a new form to the user

action: "GET" location: /students/2
What is the name of the controller method that would be called by each route?
the controller method will be called Show
What action would each of the controller methods perform?
Show controller method will list one specific item in a particular model. In this instance I would like to list the 2nd students within the student model.

action: "GET" location: /students/2/edit
What is the name of the controller method that would be called by each route?
the controller method will be called Edit
What action would each of the controller methods perform?
Show controller method will get data from one specific item in a particular model. In this instance I would like to get a form of the 2nd student within the student model.


action: "PATCH" location: /students/2

What is the name of the controller method that would be called by each route? the name of the controller method for this route will be Update.
What action would each of the controller methods perform?
Update controller method will bes used to modify information in the database. In this instance I want to modify information in the model for the 2nd student within the database. 

action: "DELETE" location: /students/2
What is the name of the controller method that would be called by each route? The name of the controller method will be Destroy
What action would each of the controller methods perform?
this controller method will be used to remove information from the database. In this case, I want to remove the data for my second student from the database. 

Resources: https://github.com/learn-academy-2023-alpha/Syllabus/blob/main/rails/restful-routes-crud.md

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

🤠 As a user, I can see every tasks I have to accomplish on my to do list
Acceptance criteria : Given that I want to see every tasks I need to do, when using the application, then I should be able to see all of those tasks listed.
🤠As a user, the home screen welcomes me and shows the week's calendar and prompts me to make a to do-list.Acceptance criteria : Given that I want to generate a to do list, when I got to the home screen, then I should be prompted to create a new to do list.
🤠 As a user, I can prioritize which tasks on my to do list must be completed first
Acceptance criteria : Given that I want to prioritize my task, when create an to do list in the app, then I should be able to sort tasks by order of priority.
🤠As a user, I can create new to do list for additional days
Acceptance criteria : Given that I want to be able to create a list for multiple days, when I use the app and when prompted to, then I should be able to make multiple list.
🤠As a user, I can add tasks to my to do list by clicking an button and inputting the selected task
Acceptance criteria : Given that I want to be able to add task to my to do list, when clicking on a button in the app, then I should be able to add more tasks as needed .
🤠 As a user, I can check tasks to see if they have been completed or if they need more time. Acceptance criteria : Given that I want to see what task have been completed and which have not, when accessing the app, I should be able to display which ones have been completed chronologically.
🤠As a user, I want to set reminders of when to complete task
Acceptance criteria : Given that I may forget what task I have completed, when making to do list on the app, I should be able to set reminders for myself of when to complete a task.
🤠As a user, I can change which tasks I want to accomplish.
Acceptance criteria : Given that different tasks need to be completed at different times, when I go to the app and I'm making my list , then I should be able to change the order in which I complete them. 
🤠As a user, I can remove a task if completed.
Acceptance criteria : Given that I can complete tasks on my today list, when completing tasks present on my to do list via the app, then I should be able to remove that tasks from the list.
🤠As a user, I have access to my calendar/scheduler to implement coordination between tasks. 
Acceptance criteria : Given that my daily tasks are associated with my calendar and scheduler, when creating a to do list, I should be able to access my calendar and schedule.

resources: https://www.justinmind.com/blog/user-story-examples/
https://www.mobindustry.net/blog/how-to-write-acceptance-criteria-examples-and-best-practices/
https://www.emergn.com/insights/write-great-user-stories/
