import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

function MeetupItem({image, title, address, description}){
    return (
    <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={image} alt={title} />
        </div>
      <div className={classes.content}>
         <h3>{title}</h3>
         <address>{address}</address>
         <p>{description}</p>
      </div>
      <div>
          <button className={classes.actions}>To Favorites</button>
      </div>
      </Card>
    </li>
        
    ) 
};

export default MeetupItem;