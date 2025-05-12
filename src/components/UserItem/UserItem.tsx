
import React from 'react';
import Avatar from '../Avatar/Avatar';

import './UserItem.css';

/**
 * Props for the UserItem component.
 * @interface UserItemProps
 * @property {string} name - The display name of the user
 * @property {string} [email] - Optional email address of the user
 * @property {object} avatarProps - Props for the avatar component
 * @property {string} [avatarProps.imageUrl] - Optional URL for the user's avatar image
 * @property {string} avatarProps.fallbackUrl - Fallback URL for the avatar image
 * @property {string} avatarProps.altText - Alternative text description for the avatar image
 * @property {"small" | "medium" | "large"} [size] - Optional size variant for the user item display
 */
interface UserItemProps {
  name: string;
  email?: string;
  avatarProps: {imageUrl?: string; fallbackUrl: string; altText: string};
  size?: "small" | "medium" | "large";
}

const UserItem = ({
  name,
  email,
  avatarProps,
  size = "medium"
}: UserItemProps) => {

  const avatarSize: Record<"small" | "medium" | "large", "xsmall" | "small" | "medium"> = {
    small: "xsmall",
    medium: "small",
    large: "medium"
  }

  return (
    <figure className={`user-item user-item--${size}`}>
      <Avatar size={avatarSize[size]} imageUrl={avatarProps.imageUrl || null} fallbackUrl={avatarProps.fallbackUrl} altText={avatarProps.altText} />
      <figcaption>
        <p>{name}</p>
        {email && <p><a href={`mailto:${email}`}>{email}</a></p>}
      </figcaption>
    </figure>
  );
}

export default UserItem;