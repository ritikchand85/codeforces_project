import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import {useState,useEffect} from 'react';
import PieChartComponent from './Piechart.jsx';
import LineChart from './Linechart.jsx';
import BarGraph from './Bargraph.jsx';

export default function Submission(props){
    const handle=props.data;

 
  
        const [accepted,setaccepted]=useState(0);
        const [tle,settle]=useState(0);
        const [wrong,setwrong]=useState(0);
        const [run,setrun]=useState(0);
        const [mpp, setMpp] = useState(new Map())
        const[mp,setmp]=useState(new Map());
        const[mrating,setmrating]=useState(new Set());
        const [contest, setContest] = useState([]);
        const [contestRating, setContestRating] = useState([]);
        console.log(mpp);
        console.log("first");
        useEffect(()=>{

            console.log("second");

            setaccepted(0);
            settle(0);
            setwrong(0);
            setrun(0);
            setmp(new Map());
            setMpp(new Map());
           
            setContest([]);
            setContestRating([]);
           
            if(handle!==""){
            const api1=`https://codeforces.com/api/user.status?handle=${handle}`;
            async function fetchdata1(){
                try{
               const ele=await fetch(api1);
               if(ele.ok){
                  const ele_data=await ele.json();
                  if(ele_data&&ele_data.result){
                    let x=new Map();
                    let y=new Map();
                    let accepted=0;
                    let tle=0;
                    let run=0;
                    let wrong=0;
                    let z=new Set();
                    ele_data.result.forEach((data)=>{
                        let programming_language=data.programmingLanguage;
                        let verdict=data.verdict;
                        let problem_name;
                        if(data.problem&&data.problem.name){

                        problem_name=data.problem.name;
                        }
                       if(programming_language){
                        y.set(programming_language,(y.get(programming_language)||0)+1);
                       }
                       
                       
                        if(verdict==="OK"){
                            accepted=accepted+1;
                        }
                        else if(verdict==="TIME_LIMIT_EXCEEDED"){
                          tle=tle+1;
                        }
                        else if(verdict==="RUNTIME_ERROR"){
                            run=run+1;
                        }
                        else if(verdict==="WRONG_ANSWER"){
                            wrong=wrong+1;
                        }
                        if(z.has(problem_name)){
                            return;
                           }
                        if(data.problem&&data.problem.tags){
                        data.problem.tags.forEach((value)=>{
                           x.set(value,(x.get(value)||0)+1);
                        });
                        z.add(problem_name);
                    }

                    });

                    setMpp(x);
                    setmp(y);
                    setaccepted(accepted);
                    settle(tle);
                    setwrong(wrong);
                    setrun(run);
                
                  }
               }
            }catch(err){
                console.log(err);
            }
            }
            fetchdata1();
            const api2=`https://codeforces.com/api/user.rating?handle=${handle}`;
            async function fetchdata2(){
                try{
                    let ele=await fetch(api2);
                    if(ele.ok){
                        let data=await ele.json();
                        if(data){
                            let tempContest = [];
                            let tempContestRating = [];
                            
                            data.result.forEach((value, index) => {
                                tempContest.push(index + 1);
                                tempContestRating.push(value.newRating);
                            });
                            setContest(tempContest);
                            setContestRating(tempContestRating);
                        }
                    }
                }catch(err){
                    console.log(err);
                }
                
            }
            fetchdata2();
           
        }
        },[handle]);

        

        
        
         const programming = Array.from(mp.keys());
    const programming_values = Array.from(mp.values());

    const problem = Array.from(mpp.keys());
    const problem_count = Array.from(mpp.values());


            console.log(problem);
            console.log(problem_count);
           
      
          
    
        
       
        return(
            <>
            <div className="outer-pi">
           <PieChartComponent label={["TLE","AC","WA","RE"]}data={[tle,accepted,wrong,run]}anchor="end"position="top" size="11"text='Submissions:'></PieChartComponent>
           <PieChartComponent label={programming}data={programming_values} anchor="end"position="top" size="7" text='Languages used:'></PieChartComponent>
           </div>
           <div className="problem">
            <BarGraph labels={problem} data={problem_count}></BarGraph>
           </div>
           <div className="rating">
            <LineChart labels={contest} data={contestRating} handle={handle}></LineChart>
           </div>
           </>
        )

    }




