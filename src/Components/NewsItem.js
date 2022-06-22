import React from 'react';
import { Card ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NewsItem1=(props)=>{

      let {title,description,imgUrl,newsUrl,author,date,source} = props;
    return (
      <div  className="my-3">

        <Card>
        <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
            <Card.Img variant="top" src={!imgUrl?'https://images.indianexpress.com/2022/06/NASA-Artemis-I-.jpg':imgUrl} />
            <Card.Body>
            
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
               <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                {/* <Button  size='sm' style={{textDecoration:'none'}} className='btn-dark' variant="primary"><a rel="noreferrer" href={newsUrl} target="_blank">Read more</a></Button> */}
            </Card.Body>
        </Card>
      </div>
    );
  
}

export default NewsItem1;

