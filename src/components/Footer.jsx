import React, { useState } from 'react';
import {
  Typography,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

const Footer = () => {
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Location"
          value="location"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>

      <Typography variant="h6" color="initial" align="center">
        Created by
        <Link
          href="https://github.com/maershaa"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          underline="none"
          gutterBottom
        >
          @maershaa
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
