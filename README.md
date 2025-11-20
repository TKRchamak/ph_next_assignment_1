# 1. What are some differences between interfaces and types in TypeScript?

     ইন্টারফেস সাধারণত অবজেক্ট টাইপ এর টাইপ ডিফাইন এর জন্য ব্যবহার করা হয়|
     টাইপ দ্বারা প্রিমিটিভ এবং অবজেক্ট সব সবধরণের টাইপ ডিফাইন করা যায় |

     Example:
     interface Book {
          title: string;
          author: string;
          publishedYear: number;
          isAvailable: boolean;
     }
     <!-- interface title : string --> // is not possible

     type Book = {
          title: string;
          author: string;
          publishedYear: number;
          isAvailable: boolean;
     }
     type title = string;

     একটি ইন্টারফেসকে নিয়ে আর একটি ইন্টারফেস তৈরিতে extends কীয় ওয়ার্ড ব্যবহার করা হয়|
     একটি টাইপকে নিয়ে আর একটি টাইপ ডিফাইন করার জন্য & অপারেটর ব্যবহার করা হয়|

     interface Book {
          title: string;
          author: string;
          publishedYear: number;
          isAvailable: boolean;
     }

     interface BookDetails extends {
          writer: string;
     }

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

     keyof  কীওয়ার্ড দ্বারা একটা অবজেক্ট এর key গুলোকে union করে একটি type তৈরী করে।
     example:
     interface Book {
          title: string;
          author: string;
          publishedYear: number;
          isAvailable: boolean;
     }
     type keysOfBook = keyof Book;

     এইটা দেখতে অনেক টা নিচের কমেন্ট করা লাইন এর মতো
     // type keysOfBook = "title" | "author" | "publishedYear" | "isAvailable"
