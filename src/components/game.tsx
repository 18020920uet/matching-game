import React from 'react';
import "./style.css";

interface GameInput {
  pairs: {term: string, definition: string}[],
}

export default function Game({pairs}:GameInput) {
  const [choices, setChoices] = React.useState<string[]>([]);
  const [current, setCurrent] = React.useState<string>("");
  const [selected, setSelected] = React.useState<string[]>([]);
  const [results, setResults] = React.useState<{term: string, definition:string}[]>([]);

  React.useEffect(()=> {
    const all = pairs.flatMap(val=> [val.term, val.definition]).sort(()=> Math.random()- 0.5);
    setChoices(all);
  },[pairs])

  function isMatch(choiceA:string, choiceB:string): boolean {
    return pairs.some(val => {
      if((val.term === choiceA && val.definition === choiceB) ||
      (val.term === choiceB && val.definition === choiceA)){
        const newChoices = choices.filter(choice => {
          if(choice !== choiceA && choice !== choiceB)
            return choice;
          return null;
        });
        setChoices(newChoices);
        setResults(results.concat(val));
        return true;
      }
      return false
    });
  }

  function choose(choice:string) {
    if(current!==""){
      if (isMatch(current,choice)) setSelected(selected.concat(choice));
      else setSelected(selected.splice(0,selected.length-1));
      setCurrent("");
    } else {
      if(current!==choice) 
        setSelected(selected.concat(choice))
      setCurrent(choice);
    }
  }

  return (
    <>
      <h2>{choices.length === 0 ? "Victory":"Keep going" }</h2>
      <div className="cards">
        {choices.map((choice,index) => 
           <div className={current && current === choice ? 'card-selected':'card'} key={index} onClick={()=> choose(choice)}>
              {choice}
          </div> 
        )}
      </div>
      <div className={results.length>0?'results':''} >
          {results.map((result,index)=>
            <div key={index} className="result">
              {result.term} : {result.definition}
            </div>
          )}
      </div>
    </>
  );
}