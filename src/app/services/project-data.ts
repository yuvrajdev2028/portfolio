import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  projectData:{title:string,desc:string,imgSrc:string,skills:string[],liveLink:string,repoLink:string}[]=[
    {
      title:'Rambo',
      desc:'Rambo is a web application for better management of reports made to NGOs.This project connects volunteers with NGOs. Volunteers can submit reports about dogs in need of help to NGOs which can then take timely action and provide assistance.',
      imgSrc:'/rambo.png',
      skills:["React.js","TailwindCSS","Express.js","MongoDB","Mongoose","Tanstack Query"],
      liveLink:"https://rambo-woad.vercel.app/",
      repoLink:"https://github.com/yuvrajdev2028/rambo"
    },
    {
      title:'Smartcart',
      desc:'Smartcart is a RAG-based bot that functions as a virtual shopping providing users with appropriate responses for their queries on the provided list of products using LLM. It uses llama-3.3-70b-versatile LLM model to generate appropriate response.',
      imgSrc:'/rag.png',
      skills:["Python","GroqCloud","Pinecone","RAG","LLaMa 3.3 70B Model"],
      liveLink:"",
      repoLink:"https://github.com/yuvrajdev2028/smartcart"
    }
  ]
}
