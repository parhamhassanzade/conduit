import React from "react";

import { Typography, Divider, ListItem, ListItemText, Box } from "@mui/material";

function ArticleCard({ title, author, description }) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={title}
                    secondary={
                        <Box>
                            <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {author}
                            </Typography>
                            <Typography>

                                {description}
                            </Typography>
                        </Box>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}

export default ArticleCard;
