import InteractionShow from "./InteractionShow";


const InteractionList = ({results}) => {
    const length = Object.values(results).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

    return <div className="row">
        {Object.keys(results).map((key, i)=>
        <InteractionShow key={i} title={key} value={results[key]/length}/>)}
    </div>
}
 
export default InteractionList;