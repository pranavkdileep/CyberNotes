/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CBTTSMBvEpV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent,Select  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"




export function AdminMmain() {
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
            <Select>
                <SelectTrigger id="materialType">
                  <SelectValue placeholder="Select material type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="audio">Audio</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="semester">Semester</Label>
            <Input id="semester" placeholder="Enter semester" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectCode">Subject Code</Label>
            <Input id="subjectCode" placeholder="Enter subject code" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input id="subjectName" placeholder="Enter subject name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter title" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="url">URL</Label>
            <Input id="url" placeholder="Enter URL" />
          </div>
          <Button className="ml-auto">Add Material</Button>
        </div>
      </TabsContent>
      <TabsContent value="addSubjects">
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <Label htmlFor="subjectName">Subject Name</Label>
            <Input id="subjectName" placeholder="Enter subject name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subjectCode">Subject Code</Label>
            <Input id="subjectCode" placeholder="Enter subject code" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="semester">Semester</Label>
            <Input id="semester" placeholder="Enter semester" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" />
          </div>
          <Button className="ml-auto">Add Subject</Button>
        </div>
      </TabsContent>
    </Tabs>
    </div>
  )
}