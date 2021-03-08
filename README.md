# nodejsapi


NodeJS api for easily extracts BLZ- texts from the MongoDB Atlas. 

Build instructions:

1. Docker build to create an image, docker run to run. 
2. There is a copy inside the k8s cluster. The namespace is nodejsapi. 
3. python command is : python main.py -A 1200. the "1200" means seconds between consecutive updates. 
4. If you need to update from a specific "event_id", use the flags: -C or -X or -Y. You should read the code in this case.

5. in general, -C is the usual update flags. -X updates only the cluster0 DB. -Y updates only the BLZ-Livindocs DB. 
