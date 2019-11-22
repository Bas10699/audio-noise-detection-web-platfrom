from flask import Flask, jsonify, request
from flask_restful import Resource, Api

import numpy as np
import wave
from flask_cors import CORS
import json
import base64
CHUNK = 44100  # number of data points to read at a time

app = Flask(__name__)
api = Api(app)
CORS(app)
noisea = []

class tester(Resource):
    def post(self):
        data = request.get_json()
        data = data['res'].split(",")
        data = data[1]
        myBase = base64.b64decode(data)
       
        with open('mymusic.mp3', 'wb') as f:
            f.write(myBase)
            f.close
        wf = wave.open('mymusic.mp3', 'rb')
        i = 0
        g= wf.getframerate()
        print("frame",g) 
        
        myArr = []
        while(True):
            
            data = np.fromstring(wf.readframes(g), dtype=np.int16)
            if data.size == 0:
                break
            peak=int(np.average(np.abs(data))*2)
            if(peak > 6500):
                if(peak > 15000):
                    myArr.append('bad '+str(i/100)) 
                    break 
                myArr.append(i/100)   
            print("%0.4d %d"%(i,peak)) 
            i=i+1 
       
        myList = {
            'time' : myArr,
                
        }
        return myList

class human(Resource):
    def post(self):
        
        data = request.get_json()
        data = data['res'].split(",")
        data = data[1]
        myBase = base64.b64decode(data)
       
        with open('mymusic.mp3', 'wb') as f:
            f.write(myBase)
            f.close
        wf = wave.open('mymusic.mp3', 'rb')
        i = 0
        g= wf.getframerate()
        print("frame",g) 
       
        myArr = []
        
        while(True):
            
            data = np.fromstring(wf.readframes(g), dtype=np.int16)
            if data.size == 0:
                break
            peak=int(np.average(np.abs(data))*2)
            if(peak > 3000):
              
                myArr.append(i/100)
            
                
            print("%0.4d %d"%(i,peak)) 
            i=i+1 
        
        myList = {
            'time' : myArr,
            
                
        }
        return myList


class tnoise(Resource):
    def post(self):
        
        data = request.get_json()
        data = data['res'].split(",")
        data = data[1]
        myBase = base64.b64decode(data)
       
        with open('mymusic.mp3', 'wb') as f:
            f.write(myBase)
            f.close
        wf = wave.open('mymusic.mp3', 'rb')
        i = 0
        
        g= wf.getframerate()
        print("frame",g) 
       
        myArr = []
        
        arr = []
        arr.clear()
        while(True):
            
            data = np.fromstring(wf.readframes(g), dtype=np.int16)
            if data.size == 0:
                break
            peak=int(np.average(np.abs(data))*2)

            if(peak > 4000):
               arr.append([i,peak])
               
                # myArr.append(i/100)
                
                
            print("%0.4d %d"%(i,peak)) 
            i=i+1 
        
       
        for i in arr:
            print(noisea)
            sum = noisea[0] - i[1]
            if(sum > -50 and sum <50):
                myArr.append(i[0]/100)
                print(myArr)
            print("time :",i[0]," :",i[1])
            
            # if hammer < i-20:
            #     pass
        myList = {
            'time' : myArr,
            
                
        }
        return myList


class custom(Resource):
    def post(self):
        
        data = request.get_json()
        print(type(data['fre']))
        fre = int(data['fre'])
        if(fre>20000):
           fre =20000
        if(fre<0):
           fre =0
        print(fre)
        data = data['res'].split(",")
        
        
        data = data[1]
        myBase = base64.b64decode(data)
         
        with open('mymusic.mp3', 'wb') as f:
            f.write(myBase)
            f.close
        wf = wave.open('mymusic.mp3', 'rb')
        i = 0
        g= wf.getframerate()
        print("frame",g) 
       
        myArr = []
        
        while(True):
            
            data = np.fromstring(wf.readframes(g), dtype=np.int16)
            
            if data.size == 0:
                break
            peak=int(np.average(np.abs(data))*2)
            if(peak >fre):
              
                myArr.append(i/100)
                
                
            print("%0.4d %d"%(i,peak)) 
            print("asdasdasdasdasdsadsadasd",fre) 
            i=i+1 
        
        myList = {
            'time' : myArr,
            
                
        }
        return myList

class noise(Resource):
    def post(self):
        
        data = request.get_json()
      
      
        data = data['res'].split(",")
        
        
        data = data[1]
        myBase = base64.b64decode(data)
    
        with open('mymusic.mp3', 'wb') as f:
            f.write(myBase)
            f.close
        wf = wave.open('mymusic.mp3', 'rb')
        i = 0
        g= wf.getframerate()
        print("frame",g) 
        noisea.clear()
        while(True):
            
            data = np.fromstring(wf.readframes(g), dtype=np.int16)
            if data.size == 0:
                break
            print(data) 
            peak=int(np.average(np.abs(data))*2)
            
            if(peak > 4000):
              
                noisea.append(peak)
                print("asdasdasdasdasdsadsadasd",noisea) 
                
            print("%0.4d %d"%(i,peak)) 
            i=i+1 
        
            
        
    


api.add_resource(tester, "/tester")
api.add_resource(noise, "/noise")
api.add_resource(tnoise, "/tnoise")
api.add_resource(human, "/human")
api.add_resource(custom, "/custom")
if __name__ == '__main__':
    app.run(debug=True)
