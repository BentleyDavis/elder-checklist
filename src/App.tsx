import React, { useCallback } from 'react';
import './App.css';

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core'
import { Survey } from 'survey-react-ui';
import { debounce } from "lodash";
import { surveyFormat } from './surveyFormat';

StylesManager.applyTheme("modern");

const saveData = (options: any) => {
  console.log(options.name, options.value)
}

surveyFormat.textUpdateMode = "onTyping" // Force onValueChanged to happen with every keypress so data is not lost
const debouncers: any = {};

function App() {
  const survey = new Model(surveyFormat)

  const handleChange = useCallback((sender: any, options: any) => {
    if (!debouncers[options.name]) {
      debouncers[options.name] = debounce((options2) => {
        saveData(options2)
      }, 1000)
    }
    debouncers[options.name](options)
  }, []);

  survey.onValueChanged.add(handleChange)

  return (
    <div className="App">
      <Survey model={survey} />
    </div>
  );
}

export default App;
