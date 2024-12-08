"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowUpRight, Briefcase, Code, FileText, Github, Linkedin, Mail, Palette, Star, Trophy } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {/* Hero Section - Spans 2 columns */}
        <Card className="p-8 md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Image
              src="/배동훈 Donghoon Bae Alf Profile bk removed.png"
              alt="Dr. Alf Bae"
              width={200}
              height={200}
              className="rounded-2xl"
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Dr. Alf Bae</h1>
              <p className="text-gray-300 text-lg">UI/UX Design Doctor with +20 years of digital product experience</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="hover:bg-white/20">
                  UI Design
                </Badge>
                <Badge variant="secondary" className="hover:bg-white/20">
                  UX Research
                </Badge>
                <Badge variant="secondary" className="hover:bg-white/20">
                  Product Design
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Card */}
        <Card className="p-6 bg-purple-50 hover:bg-purple-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </h2>
            <div className="flex flex-col gap-3">
              <Link href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Github className="w-4 h-4" />
                Github
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <Mail className="w-4 h-4" />
                Email
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Card>

        {/* Experience Highlight */}
        <Card className="p-6 md:col-span-2 bg-blue-50 hover:bg-blue-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              Experience Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="font-medium">Senior UX Designer</div>
                <div className="text-sm text-gray-600">Tech Giant Corp • 2018-Present</div>
                <div className="text-sm">Led design system implementation for enterprise products</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">Design Director</div>
                <div className="text-sm text-gray-600">Design Studio Inc • 2010-2018</div>
                <div className="text-sm">Managed team of 12 designers across global projects</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills */}
        <Card className="p-6 bg-green-50 hover:bg-green-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code className="w-5 h-5" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <Badge>Figma</Badge>
              <Badge>Sketch</Badge>
              <Badge>Adobe XD</Badge>
              <Badge>Prototyping</Badge>
              <Badge>User Research</Badge>
            </div>
          </div>
        </Card>

        {/* Publications */}
        <Card className="p-6 bg-yellow-50 hover:bg-yellow-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Publications
            </h2>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="font-medium">Design Systems at Scale</div>
                <div className="text-sm text-gray-600">Published in UX Magazine, 2023</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">The Future of Mobile UX</div>
                <div className="text-sm text-gray-600">International Design Journal, 2022</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Awards */}
        <Card className="p-6 bg-red-50 hover:bg-red-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Awards
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <div>Best Digital Experience Award 2023</div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <div>UX Design Excellence 2022</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Featured Work */}
        <Card className="p-6 md:col-span-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:bg-indigo-100 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="aspect-video bg-white rounded-lg" />
                <div className="font-medium">E-commerce Redesign</div>
                <div className="text-sm text-gray-600">Increased conversion by 45%</div>
              </div>
              <div className="space-y-2">
                <div className="aspect-video bg-white rounded-lg" />
                <div className="font-medium">Banking App</div>
                <div className="text-sm text-gray-600">4.8 Star Rating on App Store</div>
              </div>
              <div className="space-y-2">
                <div className="aspect-video bg-white rounded-lg" />
                <div className="font-medium">Healthcare Platform</div>
                <div className="text-sm text-gray-600">Serving 1M+ patients</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}

