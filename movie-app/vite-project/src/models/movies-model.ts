export interface Welcome {
    Search: Search[];
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}
