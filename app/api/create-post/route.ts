import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app/data');

export async function POST(request: Request) {
  const { title, content, slug } = await request.json();

  if (!title || !content || !slug) {
    return NextResponse.json({ message: 'Eksik veri!' }, { status: 400 });
  }

  const filePath = path.join(postsDirectory, 'posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileContents);

  const newPost = {
    slug,
    title,
    date: new Date().toISOString().split('T')[0],
    content,
  };

  posts.push(newPost);

  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');

  return NextResponse.json({ message: 'Blog yazısı başarıyla eklendi!' });
}
