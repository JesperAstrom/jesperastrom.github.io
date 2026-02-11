import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
}

export default function Seo({ title }: SeoProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}