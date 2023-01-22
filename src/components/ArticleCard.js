import React from "react";

import { Typography, Divider, ListItem, ListItemText } from "@mui/material";

function ArticleCard({ title, author, description }) {
    return (
        <>
            <ListItem alignItems="flex-start">
                {/* <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar> */}
                <ListItemText
                    primary={title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {author}
                            </Typography>
                            {description}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}

export default ArticleCard;
