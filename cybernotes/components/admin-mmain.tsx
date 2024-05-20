"use client";

import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent,Select  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sql } from "@vercel/postgres";
import { useState,useEffect } from "react"
import { addMaterials,addSubject } from "@/app/admin/api";
import { useRouter } from "next/navigation";
import process from "process";


const USENAME = process.env.ADMIN_USERNAME
const PASSWORD = process.env.ADMIN_PASSWORD

export function AdminMmain() {
  const router = useRouter();
  if(typeof window !== "undefined") {
    if(sessionStorage.getItem("admin") != USENAME && sessionStorage.getItem("pass") != PASSWORD) {
      router.push("/admin/login")
      
    }
  }
  const [materialType, setMaterialType] = useState("");
  const [semester, setSemester] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const handleaddaterial = async () => {
    console.log(materialType,semester,subjectCode,subjectName,title,description,url);
    setLoading(true);
    let count = await addMaterials(materialType,semester,subjectCode,subjectName,title,description,url);
    if(count === 1) {
      alert("Material added successfully");
    }
    setLoading(false);
  }
  const handleaddSubject = async () => {
    console.log(subjectName,subjectCode,semester,description);
    setLoading(true);
    let count = await addSubject(subjectName,subjectCode,semester,description);
    if(count === 1) {
      alert("Subject added successfully");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
    <Tabs className="w-full max-w-xl" defaultValue="addMaterials">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="addMaterials">Add Materials</TabsTrigger>
        <TabsTrigger value="addSubjects">Add Subjects</TabsTrigger>
      </TabsList>
      <TabsContent value="addMaterials">
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="materialType">Material Type</Label>
            <Select onValueChange={
              (value) => {
                setMaterialType(value);
              }
            }>
                <SelectTrigger id="materialType">
                  <SelectValue placeholder="Select material type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Materials">Materials</SelectItem>
                  <SelectItem value="Syllabus">Syllabus</SelectItem>
                  <SelectItem value="Labmaterials">Labmaterials</SelectItem>
                  <SelectItem value="QuestionPapers">QuestionPapers</SelectItem>
                </SelectContent>
              </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="semester">Semester</Label>
            <Input id="semester" placeholder="Enter semester" onChange={
              (e) => {
                setSemester(e.target.value);
              }
            
            } type="number" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectCode">Subject Code (* Small Letter And No Spaces. like:- mat266 )</Label>
            <Input id="subjectCode" placeholder="Enter subject code" onChange={
              (e) => {
                setSubjectCode(e.target.value);
              }
            } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input id="subjectName" placeholder="Enter subject name" onChange={
              (e) => {
                setSubjectName(e.target.value);
              }
            } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter title" onChange={
              (e) => {
                setTitle(e.target.value);
              }
            } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" onChange={
              (e) => {
                setDescription(e.target.value);
              }
            } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" placeholder="Enter URL" onChange={
              (e) => {
                setUrl(e.target.value);
              }
            } />
          </div>
          {loading && 
          <div className="ml-auto" role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
          }
          {!loading &&
          <Button className="ml-auto" onClick={
            handleaddaterial
          
          }>Add Subject</Button>
          }
        </div>
      </TabsContent>
      <TabsContent value="addSubjects">
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input id="subjectName" placeholder="Enter subject name" onChange={
              (e) => {
                setSubjectName(e.target.value);
              }
            
            } />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectCode">Subject Code (* Small Letter And No Spaces. like:- mat266 )</Label>
            <Input id="subjectCode" placeholder="Enter subject code" onChange={
              (e) => {
                setSubjectCode(e.target.value);
              }
            
            }/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="semester">Semester</Label>
            <Input id="semester" placeholder="Enter semester" onChange={
              (e) => {
                setSemester(e.target.value);
              }
            
            } type="number"
             />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" onChange={
              (e) => {
                setDescription(e.target.value);
              }
            } />
          </div>
          {loading && <div className="ml-auto" role="status">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
}
          {!loading &&
          <Button className="ml-auto" onClick={
            handleaddSubject
          
          }>Add Subject</Button>
          }
        </div>
      </TabsContent>
    </Tabs>
    </div>
  )
}
