Pre-requisite:

           - TypeScript 
           - Node Installation
           - NPM 
           - Angular CLI
           - Visual Studio Code (IDE)


JavaScript - functions - validation + Dynamic content based on DOM API
               objects - defined using functions 
               var str = "hello"
                        str = 10
JavaScript - based on Specification - EcmaScript (ES3, ES5 - Objects & functions, 

 ES6 - ECMAScript 2015 , ES7 - Specifications for JS.

 Some features of ES6
 ========================================================
     var - global level/function-level
     ES6 - let & const
             let - block-level scope 
                 function method(){
                   for (let i = 1; i < 10; i++)
             {
               // scope of i 
              } 
            } 
            
const - Final variables (You cannot change the value of variable
const PI = 31.4; 
      
Arrow function 
===========================================================
   var x = function(){
   
   }

  x();

  var x = () => {

  }
 
========================================================
  TypeScript  (ES5 & ES6)
            - Object Oriented Programming Language
            - Superset of JavaScript
            - Typed-language - Data types - string, number, boolean, any, undefined, Observable, Subject, [ ] , {id: number , name: string } 
            var employee = new Employee() // 
             syntax - variable : <type>
                        title : string = '';

          class & objects
          interface type
          
    TypeScript is based on JavaScript


   Node - provides Modules 

           Module -> npm (Node Package Manager) -> Bootstrap, angular-cli, jquery, moment

          commmand line - npm install <package-name>@version

Type of installation can be done with npm
====================================================

         - Local installation - within the project folder
           npm install bootstrap@3.3.7 
                   node_modules folder
                        - package installation

        - Global installation -  installation globally for all projects
                
               npm install --global / -g <package-name>@version

                     Default path on local machine - C:/Users/priyankag2/AppData/Roaming/npm

For Developing angular projects
=======================================================    
Tool -> Angular CLI -create, generate components, build, dev env. - build, test
    - It can be used to create production-ready application
ng new  // Create a workspace and a default project inside it   ng generate
 1 workspace = 1 default project or application
     ng new my-app 

 For multiple projects into one workspace
  a. ng new my-workspace --create-application false // only workspace - no default project
  b. ng generate application login
  c. ng generate application customer

 Angular Project Structure
 =========================================
Workspace - collection of projects
                    - project1
                           - src
                                 - html page 
                            - e2e
                    - project 2
                              - src
                              - e2e
               - Configuration files
                       angular.json  (manage all project related configuration)
                       package,json
                       tsconfig.json
   

   
Documentation - https://angular.io/docs

version of Angular
 ====================
1.x -  MVC framework  - Angular runtime
  <div ng-controller="function()"/>
  <script> </script>

 2.x -  MV(VM) Angular Architecture - Angular runtime - bundled into js files and loaded into the browser 
                           AOT (Ahead of Time compilation)

  Traditional approach -> client-side application (HTML + CSS + JavaScript)

 What is Angular?
==================================================
  Angular Web application are loaded and executed into the browser  
  Angular is used to build client-side applications based on HTML & TypeScript
 Web application will be built as Single-Page Application (SPA)
           - User experience
           - Easy to deploy and version 
         
  SPA - Only one HTML page
           = after the initial page is loaded, all updates on the page are done dynamically  -------------> even sending request to server
           - no reload of the page happening further
          localhost:4200/index.html
               
           Where we can use Angular?
                      - Scalable  and Flexible applications
             
Angular Application building blocks
==============================
      Modules - is like a package or a container 
                   - Visibility of components
                   - By default , root module is loaded with its component + other child module
      Component - representing the UI (user interface) on the web page
            
            Component ->   (Logic -> Component class)  + Template (HTML)
           Every Component =           Model  (data)        + Views (UI)  (tight-coupled)

     can two components can share their views?
        No 

     Templates - Represent the view of a component 

      Forms - Wrappers  on Angular forms (<form>  </form>) 
               - Template Form (declarative)
               - Reactive Form (Programmatic)

      Directives - <h1  align="center" style="color:#5663;"> text </h1>  ---------> HTML specification -> class h1{... ,  // logic }
             - Extra functionality or logic applied on existing HTML element
        Types
                  - structural
                  - attributes

        - Custom Directives
        - Inbuilt Directives - ngIf, ngFor        
      
       Pipes - Transform the value   ls | grep "*.txt"  employee.name | uppercase
        - inbuilt pipe - uppercase, lowercase, date pipe, number pipe, currency pipe
        - custom pipe

      Services - Business Logics - common cutting concerns
                 - Common functionality  - fetching of data from backend
                 - Logging
                 - Security 


 Dependency Injection -  is a design pattern that is implemented in the Angular framework
    - provide the dependent objects to the component at runtime

Service
class Logging {
       info(message)
   }

// has-a relationship - composition
 class ComponentA 
   {
           constructor(Logging logging) // DI {

            }
                // Create the object of Service
              //  Logging logger = new Logger() // testing 
               //logger.info()   
      
   }

   Routes - provide navigation on page based on hyperlink
     IF you want to load components dynamically on Web page, configure routing


 
      Namepace/Package
                  - class
                          -field
                         - methods
     Object of a class - Patient p = new Patient(); -> build an object in the heap memory + initialize the properties
    Create a basic angular application
    
     steps
         - node should be installed
          - npm install -g @angular/cli
          - ng new <application-name>
          - cd project 
          - > ng serve

    ng serve
    
     http://localhost:4200 
            a. index.html
                b. Loaded Root Component
            

  Features of Angular
  =======================================
   1. Modularization - easy to maintain and testing 

    Functionality - business application

         Root Module
              - Root Component
              - NavigateComponent
              - FooterComponent

       Authenticate Module
          - LoginComponent
          - RegistrationComponent
          - ForgetPasswordComponent 
          - NotificationComponent
          
      Patient Module
      - RegistrationComponent  
     -  UpdateProfileComponent 
     - ScheduleAppointmentComponent
          
  2. Application architecture is based on components

   3. Declarative way of writing    

   4. It implemets DI pattern in the framework for managing dependencies

  5. Data binding -  bind component data with its view(template)

       a. One - Way data binding
       b, Two-Way data binding
       c. Event binding
                                   One-way binding
        Component ----------------------------------------> Template 
          (data)
           var name="john"                                          <input type="text" value="variable-name"/>  

             <------------------------------------------
    
   Angular Decorators
   =========================
       - @Component - class -level ..define class as component for angular
                                 

  npm install bootstrap@3.3.7
  node_modules
             bootstrap
                         dist
                                css
                                       bootstrap.min.css
        
  Placing of components - tree of components 
    - <app-root> 
 
   By default all components UI will be rendered in the DOM elements
          
 Generate the component
================================================
   1. Manually write the component class
   2. ng generate component patient

   Every component has life-cycle methods/hooks
    init
    destroy
 
 Component life cycle
 =========================================================        
        - call constructor -> to initialize all data-bound properties -> only once
        - ngOnChanges -> called repeatedly on updating value of data-bound property
        - ngOnInit() -> validation or give new value to data-bound propetties - > only once
      
    @NgModule({
           
         declarations: [ // Component Registered  ]
         
            imports: [ // Child Modules ]

   )

Developing a Component
======================================================
  
  1. Create a class and define data-bound property and methods
  2. Apply the @Component
  3. Define attributes selector and template
  4. Register the component either in the Root Module or into its specific module
  5. Place the component either in the Root component or into its parent component

  Files of component generated in IDE
       component
                   .html
                   .css
                   .ts
                   .spec.ts   

==========================================================
@NgModule({

   declarations: [],
   imports:[
      CommonModule // child  module
   ]
})

* To create a module
ng new module dashboard

* To create a component and register in the dashboard module
ng generate component contact --module=dashboard 

* To skip test files while creating component
ng generate component contact --module=dashboard --skip-tests true

