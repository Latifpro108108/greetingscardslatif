import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
  <GreetingCards 
    title={"Happy Birthday"} 
    message={"Wishing you a fantastic day filled with joy"} 
  />
  <GreetingCards 
    title={"Congratulations"} 
    message={"Great job on your achievement"} 
  />
  <GreetingCards 
    title={"Thank You"} 
    message={"Thanks for your kindness and support"} 
  />
</div>

      
    </div>
  );
};

export default App;
