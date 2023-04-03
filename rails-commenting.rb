# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags
# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a definition of a class called BlogPostsContoller that inherits from another class called ApplicationController. In ruby on rails, a controller is responsible for handiling incoming user requests from a web browser and responding by providing the expected output. The def index is a method "index" that is used to retrieve all the blog posts from a database and display them on the browser. The BlogPostsController class and index method serve to control the behavior of the webpage that displays the various blog posts by retrieving datat from the database and displaying it to the user in a readble format.  
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts = Blogpost.all retrieves all of the instances of the "BlogPost" model from the database and stores them as an instance vriable called @posts. This instance variable can be accessed via an associated viewing template which should display a list of blog post to the user. 
    @posts = BlogPost.all
  end
  # ---3) this code defines the show method within the BlogPostsController class within the application. The show method is used to retrieve a single blog post from the database and display it on a webpage to the user when they navigate to a specific URL endpoint that corrensponds to the post's ID. @post =BlogPost.find(params[:id]) is used to retrieve a single blog post from the database based on it's ID. The ID is passed to the method via params hashes which contains the parameters of the http request that is made by the user. Once the blog post is retrieved from the database, it is assigned to an instance variable called "@post". This instance variable can then be accessed by the corresponding view template to display the blog post's content to the user. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This line of code defines a method called new within the BlogPostController class within the ruby on rails application. The purpose of the new method within our app is to create a new instance of the BlogPost model, which represents a blog post in the application. @post = BlogPost.new intializes a new instance of the BlogPost model assigns it to an instance variable called @post. The instance variable @post is used to render a form in a view template, which allows the used to input the details of a new blog post if desired. When the user submits the form, the data is sent to the create method in the controller, which saves the new blog post to the datebase. This line of code intiliazes a new instance of the BlogPost model and makes it available to the view template to render a form to create a new blog post.
  # additionally, the purpose of the create method defined wihtin the controller is to handle a submission of a form from the user which contains data for a new blog post. When a user submits a form, the data is sent to the create method which saves the new blog post to the database. The create method validates the users input and saves a new blog post to the database. 
  def new
    @post = BlogPost.new
  end
  def create
    # ---5) this line of code @post = Blogpost.create(blog_post_params) creates a new instance of the BlogPost model and intiliazes it with data submitted by the user, which is then saved to the database. Concurrrently, the create method then checks if the new blog post is valid by calling the valid? method on the @post instance variable. The valid? method will check the model's validations and returns true if the blog post is valid and false if otherwise. if the blog post is valid, the method redirects the user to the newly created blog post's page using the redirect_to method and blog_post_path helper method, which will generate the URL for the blog post's page pased on it's ID @post.  This line of code serves to create a new blog post from user input, saving it to the database and redirecting the user to the newly created blog post page if the post is valid.  The purpose of the edit method defined within the BlogPostsController class is to allow the user to edit an existing blog post. The method retrieves the blog post to be editied from the database and assigns it to an intance variable which is used to render a view template. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)This line of code retrieves a blog post to be editied by calling BlogPost.find(params[:id]) where params[:id] contains the ID of the blog post to be edited. 
    @post = BlogPost.find(params[:id])
  end
# --- this line of code defines a method called update within BlogPostsController class in a Ruby on Rails Application. The purpose of the update method is to receive a form submision from the user with updated datae for an existing blog post, and then update that post in the database with the new data. 
  def update
    @post = BlogPost.find(params[:id])
    # ---7)The method first retrieves the blog post to be updated from the database by calling "BlogPost.find(params[:id])", where "params[:id]" contains the ID of the blog post to be updated.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
  # Next, the method calls the update method on the retrieved blog post, passing in the updated data from the form submission through the "blog_post_params" method. If the update is successful and the data is valid, the blog post is saved to the database with the new data.  the method redirects the user to the updated blog post's show page by calling "redirect_to blog_post_path(@post)", where "@post" is the updated blog post instance variable.
  # this line of code defines a method called destroy within BlogPostsController class in a Ruby on Rails Application. The purpose of the destroy method is to delete a specific blog post from the database. In this class, the params[:id] variable is used to find the blog post with a corresponding ID using the Blogpost.find method. One the blog post is found by the user, the destroy method is called on to delete it from the database. 


  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)  If the blog post is successfully deleted, the method redirects the user to the index page of all blog posts using the redirect_to method with blog_posts_path as the argument. This ensures that the user is taken to the correct page after the blog post is deleted. If the deletion is not successful, no redirection will occur, and the user will remain on the current page.
    redirect_to blog_posts_path
    end
  end

  # ---9) in Ruby, the private keyword is used to define private methods which can only be accesible within the class where it is defined. This means that the private method cannot be called from outside of the class or by other objects located within the controller.  In this line of code private is used to defind a private method called blog_post_params. This method handles request related to blog posts.  The blog_post_params method is used to define the parameters that are permitted for creating or updating a blog post. By defining a private method the blog_post_params method is only accesible within the controller, which helps improve the secruity and maintainability of our codebase .This method is used in a controller action to handle the form submission or request.
  private
  def blog_post_params
    # ---10)This line of code is used to specify the permitted paramteters for creating or updating a blog post. The permit method allows only the specified attributes to be updated or created,in this case :title and :content of the blog_post. This helps to protect against unauthorized parameter modification, which is a security risk. 
    params.require(:blog_post).permit(:title, :content)
  end
end
