const Redis = require('ioredis');
const redis = new Redis({
                  port: 6379,
                  host: "clustercfg.redis-server.bs0lmf.memorydb.ap-south-1.amazonaws.com",
                  tls: {},
          });;


const  REDIS_QUEUE_KEY = 'decodedDataQueue';


async function enqueueData() {
decodedData = 'tomato';

  try {
    const result = await redis.rpush(REDIS_QUEUE_KEY, decodedData);
   console.log("res",result); 
	process.exit(1);
return result;
  } 
  catch(err){
    console.log("error", err)
  }
}

async function printData() {
    decodedData =  await redis.lrange(REDIS_QUEUE_KEY,0,-1);
    console.log('All data are :', decodedData);
        process.exit(1);    
return decodedData;
}

async function dequeueData() {
    decodedData =  await redis.lpop(REDIS_QUEUE_KEY);
    console.log('Processed:', decodedData);
	process.exit(1);    
return decodedData;
}


//enqueueData()
printData()
//dequeueData()
