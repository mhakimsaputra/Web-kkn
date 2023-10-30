"use client";
import React from "react";


const Gallery = () => {
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/2.jpg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/1.jpg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/3.jpg"  />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/4.jpg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/5.jpg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/kkn2.jpeg"  />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/kkn1.jpeg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/3.jpg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/2.jpg"  />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/kkn5.jpeg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/kkn5.jpeg"  />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="images/galeri/kkn4.jpeg"  />
          </div>
        </div>
      </div>
    )
}

export default Gallery;