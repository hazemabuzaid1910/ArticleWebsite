   export default class Data {
       articles = [{
               title: "IT & Software",
               color: "bg-[#FFEEE8]",
               icon: "/Course Images (1).png"
           },
           {
               title: "Marketing",
               color: "bg-[#EBEBFF]",
               icon: "/Branches.png"
           }, {
               title: "DESIGN",
               color: "bg-[#E1F7E3]",
               icon: "/person.png"
           }, {
               title: "Developments",
               color: "bg-[#EBEBFF]",
               icon: "/immage.png"
           }, {
               title: "Business",
               color: "bg-[#FFF0F0]",
               icon: "/Course Images (5).png"
           },
           {
               title: "IT & Software",
               color: "bg-[#FFEEE8]",
               icon: "/Course Images (6).png"
           },
           {
               title: "Marketing",
               color: "bg-[#EBEBFF]",
               icon: "/Course Images (7).png"
           }, {
               title: "DESIGN",
               color: "bg-[#E1F7E3]",
               icon: "/Course Images (8).png"
           }, {
               title: "Developments",
               color: "bg-[#EBEBFF]",
               icon: "/Course Images.png"
           }, {
               title: "Business",
               color: "bg-[#FFF0F0]",
               icon: "/Course Images (1).png"
           },
       ];
       categories = [{
               title: "Label",
               articles: "63,476 Articles",
               color: "bg-[#EDE9FE]",
               icon: "/Label.svg",
           },
           {
               title: "Business",
               articles: "52,822 Articles",
               color: "bg-[#DCFCE7]",
               icon: "/Busniess.svg",
           },
           {
               title: "Finance & Accounting",
               articles: "33,841 Articles",
               color: "bg-[#FFF2E5]",
               icon: "/Finance.svg",
           },
           {
               title: "IT & Software",
               articles: "22,649 Articles",
               color: "bg-[#FFF0F0]",
               icon: "/It&software.svg",
           },
           {
               title: "Personal Development",
               articles: "20,126 Articles",
               color: "bg-[#FFF]",
               icon: "/development.svg",
           },
           {
               title: "Office Productivity",
               articles: "13,932 Articles",
               color: "bg-[#F1F5F9]",
               icon: "/prodoctivity.svg",
           },
           {
               title: "Marketing",
               articles: "12,068 Articles",
               color: "bg-[#EEF2FF]",
               icon: "/Marketing.svg",
           },
           {
               title: "Photography & Video",
               articles: "6,196 Articles",
               color: "bg-[#F8FAFC]",
               icon: "/Photo.svg",
           },
       ];
       images = [
           { img: "/Google.png" },
           { img: "/youtube.png" },
           { img: "/AMG.CO.png" },
           { img: "/Lenovo.png" },
           { img: "/salk.png" },
           { img: "/Virason.png" },
           { img: "/LexMark.png" },
           { img: "/microsoft.png" }
       ];
       writer = [
           { person: "/Image (1).png" },
           { person: "/Image (2).png" },
           { person: "/Image (3).png" },
           { person: "/Image.png" },
           { person: "/Image (3).png" },
           { person: "/Image (2).png" },

       ];

       Category = [{
               title: "General Questions",
               faqs: [{
                       question: "Nulla tempor odio ut fringilla",
                       answer: "Proin quis elementum velit, eget efficitur nulla..."
                   },
                   {
                       question: "Donec malesuada",
                       answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                   }
               ]
           },
           {
               title: "Quisque ",
               faqs: [{
                       question: "Ut ullamcorper est sit amet quam aliquet mattis.",
                       answer: "Proin quis elementum velit, eget efficitur nulla..."
                   },
                   {
                       question: "Donec malesuada",
                       answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                   }
               ]
           },
           {
               title: "Donec malesuada ",
               faqs: [{
                       question: "Vestibulum pellentesque ex magna.",
                       answer: "Proin lacinia lobortis metus, ut faucibus eros ullamcorper et."
                   },
                   {
                       question: "Donec malesuada",
                       answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                   }
               ]
           },
           {
               title: "Etiam eu libero elementum ",
               faqs: [{
                       question: "Nulla tempor odio ut fringilla",
                       answer: "Proin quis elementum velit, eget efficitur nulla..."
                   },
                   {
                       question: "Donec malesuada",
                       answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                   }
               ]
           },
           {
               title: "Technical Support",
               faqs: [{
                       question: "Quisque",
                       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
                   },
                   {
                       question: "Toquam, in accumsan",
                       answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..."
                   }
               ]
           }
       ];
       image = [
           { img1: "/img1.png" },
           { img1: "/img2.png" },
           { img1: "/img3.png" },
           { img1: "/img4.png" },
       ];

       categoriees = [
           { name: "All", count: 124, color: "bg-gray-100 text-gray-700" },
           { name: "Development", count: 45, color: "bg-blue-100 text-blue-700" },
           { name: "Design", count: 32, color: "bg-purple-100 text-purple-700" },
           { name: "Marketing", count: 28, color: "bg-green-100 text-green-700" },
           { name: "Business", count: 19, color: "bg-orange-100 text-orange-700" },
           { name: "Finance", count: 15, color: "bg-red-100 text-red-700" },
           { name: "Technology", count: 23, color: "bg-indigo-100 text-indigo-700" }
       ];

       articlees = [{
               id: 1,
               title: "Advanced React Patterns and Best Practices",
               excerpt: "Learn about advanced React patterns including render props, compound components, and custom hooks to build scalable applications.",
               author: "Sarah Johnson",
               authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-15",
               readTime: "8 min read",
               category: "Development",
               views: 1234,
               rating: 4.8,
               image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
               featured: true
           },
           {
               id: 2,
               title: "UI/UX Design Principles for Modern Web Applications",
               excerpt: "Discover the fundamental design principles that make web applications both beautiful and functional for users.",
               author: "Michael Chen",
               authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-12",
               readTime: "6 min read",
               category: "Design",
               views: 987,
               rating: 4.6,
               image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
           },
           {
               id: 3,
               title: "Digital Marketing Strategies That Actually Work",
               excerpt: "Explore proven digital marketing strategies that deliver real results and help grow your business online.",
               author: "Emma Davis",
               authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-10",
               readTime: "10 min read",
               category: "Marketing",
               views: 756,
               rating: 4.7,
               image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
           },
           {
               id: 4,
               title: "Building Scalable Business Models in 2024",
               excerpt: "Learn how to create and scale business models that can adapt to changing market conditions and customer needs.",
               author: "David Wilson",
               authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-08",
               readTime: "12 min read",
               category: "Business",
               views: 642,
               rating: 4.5,
               image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&h=250&fit=crop"
           },
           {
               id: 5,
               title: "Personal Finance Management for Professionals",
               excerpt: "Master the art of personal finance management with practical tips and strategies for long-term wealth building.",
               author: "Lisa Thompson",
               authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-05",
               readTime: "7 min read",
               category: "Finance",
               views: 523,
               rating: 4.4,
               image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
           },
           {
               id: 6,
               title: "The Future of Artificial Intelligence and Machine Learning",
               excerpt: "Explore the latest trends and developments in AI and ML that are shaping the future of technology.",
               author: "Alex Rodriguez",
               authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
               date: "2024-01-03",
               readTime: "15 min read",
               category: "Technology",
               views: 891,
               rating: 4.9,
               image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
           }
       ];
   }