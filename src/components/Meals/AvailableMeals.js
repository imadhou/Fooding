import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
        id:'1',
        name:'suchi',
        description: 'finest fish and veggies',
        price: 22.99,
    },
    {
        id:'2',
        name:'frittes',
        description: 'hi french fries',
        price: 3.5,
    },
    {
        id:'3',
        name:'kebab',
        description: 'koi chef??',
        price: 5.99,
    },
    {
        id:'4',
        name:'BK',
        description: 'B3aaaa!',
        price: 11.99,
    },
    {
        id:'5',
        name:'pizza',
        description: 'fiveeeeeee',
        price: 5,
    }
]
 
const AvailableMeals = ()=>{
    const mealsList = DUMMY_MEALS.map( (meal) => (
        
    <MealItem key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
        image={meal.image} /> 
        ));
    return(
        <section className={classes.meals}>
           <Card>
            <ul style={{display:'block'}}>
                {mealsList}
            </ul>
           </Card>
        </section>
    )
}

export default AvailableMeals;