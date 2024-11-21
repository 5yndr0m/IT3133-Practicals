import {people} from '../../assets/Oct_10/data';
import People from './People';
export default function Body(){
    return(
        <>
        <h3>List of famous people</h3>   
       {
            people.map(item=><People detail={item}></People>)
       }
        </>
    );
}