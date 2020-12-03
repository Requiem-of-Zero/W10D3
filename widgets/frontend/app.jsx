import React from 'react';
import Autocomplete from './autocomplete';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather'

const titleObj = [{
  title: "Tab1",
  content: "tab 1 content"
}, 

{
  title: "Tab2",
  content: "tab 2 center"
},]

const names = ["Sam", "Jeff", "Kenny", "Yas", "Ukk"];

const App = () => (
  <div className="app-wrapper">
    <Clock />
    <Tabs tabs={titleObj}/>
    <Weather />
    <Autocomplete names={names} />
  </div>
)

export default App;