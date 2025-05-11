
import React, {useState, useEffect} from 'react';

import './Avatar.css';

/**
 * Props for the Avatar component
 * @interface AvatarProps
 * @property {string} [imageUrl] - Optional primary image URL for the avatar
 * @property {string} fallbackUrl - Fallback image URL to use when primary image fails to load or is not supplied
 * @property {string} altText - Alternative text description for the avatar image
 * @property {"xsmall" | "small" | "medium" | "large"} size - Size variant for the avatar component
 */
interface AvatarProps {
  imageUrl?: string;
  fallbackUrl: string;
  altText: string;
  size: "xsmall" | "small" | "medium" | "large";
}

const Avatar = ({imageUrl, fallbackUrl, altText, size="medium"}: AvatarProps) => {

  const [image, setImage] = useState<string>(fallbackUrl);
  const [alt, setAlt] = useState<string>(altText);

  useEffect(() => {
    setImage(imageUrl || fallbackUrl);
    console.log("Image URL changed:", imageUrl || fallbackUrl);
  }, [imageUrl, fallbackUrl]);

  function handleError() {
    if(image !== fallbackUrl) {
      setImage(fallbackUrl);
      setAlt("Image not found");
    } else { console.log("AVATAR error: Fallback image not found"); }
  }

  return (
    <img className={`avatar avatar--${size}`} src={image} onError={handleError} alt={alt}/>
  );
}

export default Avatar;