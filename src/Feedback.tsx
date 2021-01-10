import { Rating } from '@material-ui/lab';

const Feedback = () => {

    return (
      <>
      <div style={{backgroundColor: '#303F9F', flex: 1}}>
      <div style={{color:'white',padding:50, textAlign:'left'}}>
      <h2>Feedback earned in your last jobs</h2>
    </div>
    </div>
  
      <div style={{flex: 1}}>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '80%', height: 200,
         marginTop: -40, backgroundColor: 'white', borderRadius: 2, display: 'flex'}}>
           <div style={{flex:1,display: 'flex',marginLeft:40, flexDirection: 'column'}}>
           <div style={{display: 'flex', marginTop:10, flexDirection: 'row',justifyContent:'space-around'}}>
           <div style={{flex:1,display: 'flex',fontSize:22,textAlign:'left',flexDirection: 'row',justifyContent:'center'}}>
             <div style={{flex:2}}>
             IBM - App Development
            </div>
           <div style={{flex:1,width:100,height:40,backgroundColor: 'white', borderRadius: 25,borderWidth:'thin', borderStyle:"solid",
             borderColor:'lightgreen', display: 'flex',justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'lightgreen',fontSize:18}}>Success</div></div></div>       
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>How did you rate your employer?</div> 
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>Oganisation Feedback</div>  
            </div>
            <div style={{display: 'flex', marginTop:30, flexDirection: 'row'}}>
            <div style={{flex:1,textAlign:'left',fontSize:18}}>Skills progressed</div> 
            <div style={{flex:1}}>
            <Rating name="read-only" value={5} readOnly />
            </div>
            <div style={{flex:1}}>
            <Rating name="read-only" value={4} readOnly />
              </div>
          
            </div>
            <div style={{display: 'flex', flexDirection: 'row',marginTop:30}}>
            <div style={{width:160,height:40, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>Consulting +1</div></div>
           <div style={{width:160,height:40,marginLeft:5, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>Planning +1</div></div>
           </div>
            </div>
            </div>
          </div>
      </div>
      <div style={{flex: 1}}>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '80%', height: 200,
         marginTop:10, backgroundColor: 'white', borderRadius: 2, display: 'flex'}}>
           <div style={{flex:1,display: 'flex',marginLeft:40, flexDirection: 'column'}}>
           <div style={{display: 'flex', marginTop:10, flexDirection: 'row',justifyContent:'space-around'}}>
           <div style={{flex:1,display: 'flex',fontSize:22,textAlign:'left',flexDirection: 'row',justifyContent:'center'}}>
             <div style={{flex:2}}>
            Apple - App Development
            </div>
           <div style={{flex:1,width:100,height:40,backgroundColor: 'white', borderRadius: 25,borderWidth:'thin', borderStyle:"solid",
             borderColor:'lightgreen', display: 'flex',justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'lightgreen',fontSize:18}}>Success</div></div></div>       
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>How did you rate your employer?</div> 
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>Oganisation Feedback</div>  
            </div>
            <div style={{display: 'flex', marginTop:30, flexDirection: 'row'}}>
            <div style={{flex:1,textAlign:'left',fontSize:18}}>Skills progressed</div> 
            <div style={{flex:1}}>
            <Rating name="read-only" value={1} readOnly />
            </div>
            <div style={{flex:1}}>
            <Rating name="read-only" value={2} readOnly />
              </div>
          
            </div>
            <div style={{display: 'flex', flexDirection: 'row',marginTop:30}}>
            <div style={{width:160,height:40, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>UX Designer +1</div></div>
           </div>
            </div>
            </div>
          </div>
      </div>
      <div style={{flex: 1}}>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '80%', height: 200,
         marginTop:10, backgroundColor: 'white', borderRadius: 2, display: 'flex'}}>
           <div style={{flex:1,display: 'flex',marginLeft:40, flexDirection: 'column'}}>
           <div style={{display: 'flex', marginTop:10, flexDirection: 'row',justifyContent:'space-around'}}>
           <div style={{flex:1,display: 'flex',fontSize:22,textAlign:'left',flexDirection: 'row',justifyContent:'center'}}>
             <div style={{flex:2}}>
             Microsoft - App Development
            </div>
           <div style={{flex:1,width:100,height:40,backgroundColor: 'white', borderRadius: 25,borderWidth:'thin', borderStyle:"solid",
             borderColor:'lightgreen', display: 'flex',justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'lightgreen',fontSize:18}}>Success</div></div></div>       
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>How did you rate your employer?</div> 
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>Oganisation Feedback</div>  
            </div>
            <div style={{display: 'flex', marginTop:30, flexDirection: 'row'}}>
            <div style={{flex:1,textAlign:'left',fontSize:18}}>Skills progressed</div> 
            <div style={{flex:1}}>
            <Rating name="read-only" value={5} readOnly />
            </div>
            <div style={{flex:1}}>
            <Rating name="read-only" value={5} readOnly />
              </div>
          
            </div>
            <div style={{display: 'flex', flexDirection: 'row',marginTop:30}}>
            <div style={{width:160,height:40, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>Backend +1</div></div>
           </div>
            </div>
            </div>
          </div>
      </div>
      <div style={{flex: 1}}>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '80%', height: 200,
         marginTop:10, backgroundColor: 'white', borderRadius: 2, display: 'flex'}}>
           <div style={{flex:1,display: 'flex',marginLeft:40, flexDirection: 'column'}}>
           <div style={{display: 'flex', marginTop:10, flexDirection: 'row',justifyContent:'space-around'}}>
           <div style={{flex:1,display: 'flex',fontSize:22,textAlign:'left',flexDirection: 'row',justifyContent:'center'}}>
             <div style={{flex:2}}>
             IBM - Project Management
            </div>
           <div style={{flex:1,width:100,height:40,backgroundColor: 'white', borderRadius: 25,borderWidth:'thin', borderStyle:"solid",
             borderColor:'lightgreen', display: 'flex',justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'lightgreen',fontSize:18}}>Success</div></div></div>       
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>How did you rate your employer?</div> 
           <div style={{flex:1,fontSize:22,textAlign:'center'}}>Oganisation Feedback</div>  
            </div>
            <div style={{display: 'flex', marginTop:30, flexDirection: 'row'}}>
            <div style={{flex:1,textAlign:'left',fontSize:18}}>Skills progressed</div> 
            <div style={{flex:1}}>
            <Rating name="read-only" value={3} readOnly />
            </div>
            <div style={{flex:1}}>
            <Rating name="read-only" value={4} readOnly />
              </div>
          
            </div>
            <div style={{display: 'flex', flexDirection: 'row',marginTop:30}}>
            <div style={{width:160,height:40, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>Consulting +1</div></div>
           <div style={{width:160,height:40,marginLeft:5, borderRadius: 25,borderWidth:'thin', borderStyle:"solid",  backgroundColor:'#303F9F', display: 'flex', justifyContent: 'center'}}> 
           <div style={{alignSelf: 'center', color:'white',fontSize:18}}>Planning +1</div></div>
           </div>
            </div>
            </div>
          </div>
      </div>
      </>
    );
  }
  
  export default Feedback;
  