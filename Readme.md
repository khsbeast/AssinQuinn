###                                        Quinn Frontend Internhip Assingment



### Tech Stack used

React Js
CSS
Bootstrap(Button and Card skeleton temeplates)

### Component Structure

# Api -> Responsible for request object and returns the data after api is called.

# Box -> Responsible for 1 calendar Box View recives object data as prop from Home Component

# Cards -> Responsible for a Single Card Component recieves object data as prop from Home Component

# Helpers -> Contains all the helping Components

##          Modal -> Responsible to activate as we click the box component Handle the Slicker component

##          Slick -> Responsible for generating the slider component recives data and index from Modal

##          Spinner -> UI before data fetched

##          Star -> Rating Component

##          Tag -> generates coditional tags depend on object tags array

# Home -> The main ui components handle all states fetches data to send as props to children and generates diffrent fallback UIs

# Test -> Just for testing working of components