
import React from 'react';
import Avatar from '../Avatar/Avatar';

import './UserItem.css';

/**
 * Props for the UserItem component.
 * @interface UserItemProps
 * @property {string} name - The display name of the user
 * @property {string} [email] - Optional email address of the user
 * @property {string} [avatarImageUrl] - Optional URL for the user's avatar image
 * @property {string} avatarFallbackUrl - Fallback URL for the avatar image if primary image fails to load is it not supplied
 * @property {string} avatarAltText - Alternative text description for the avatar image
 * @property {"small" | "standard" | "large"} [size] - Optional size variant for the user item display
 */
interface UserItemProps {
  name: string;
  email?: string;
  avatarImageUrl?: string;
  avatarFallbackUrl: string;
  avatarAltText: string;
  size?: "small" | "medium" | "large";
}

const UserItem = ({
  name,
  email,
  avatarImageUrl,
  avatarFallbackUrl,
  avatarAltText,
  size = "medium"
}: UserItemProps) => {

  const avatarSize: Record<"small" | "medium" | "large", "xsmall" | "small" | "medium"> = {
    small: "xsmall",
    medium: "small",
    large: "medium"
  }

  return (
    <figure className={`user-item user-item--${size}`}>
      <Avatar size={avatarSize[size]} imageUrl={avatarImageUrl} fallbackUrl={avatarFallbackUrl} altText={avatarAltText} />
      <figcaption>
        <p>{name}</p>
        {email && <p><a href={`mailto:${email}`}>{email}</a></p>}
      </figcaption>
    </figure>
  );
}

export default UserItem;