library(leaflet)
library(mapview)
library(rstudioapi)

# Set working directory to path of script
current_path = getActiveDocumentContext()$path
setwd(dirname(current_path))

# Get data set
affiliations = read.csv('affiliations.csv')

# Generate Map
affiliation_map = leaflet(affiliations) %>% addTiles() %>%
  addProviderTiles(providers$CartoDB.Positron) %>%
  addCircleMarkers(lng = ~Long, lat = ~Lat, radius = 6,color = ~ifelse(affiliations$Name == "UCSB Geography", "red", "navy"), stroke = FALSE, fillOpacity = 0.7,
             label = mapply(function(w, x, y, z) {
               HTML(sprintf("<img style='float:left; margin-right:10px;' src = %s width = %spx><p style='line-height:1;'>%s<br/><span style='font-weight:400;'>%s</span></p>", htmlEscape(w), htmlEscape(x), htmlEscape(y), htmlEscape(z)))},
               affiliations$Src, affiliations$Width, affiliations$Name, affiliations$Loc, SIMPLIFY = F),
             labelOptions = labelOptions(direction = "auto",
                                         style = list(
                                           "box-shadow" = "9px 9px rgba(0,0,0,0.25)",
                                           "border-color" = "navy",
                                           "padding-right" = "100px",
                                           "background-color" = "white")))%>%
  addLogo("affiliations/logo.png", alpha = 0.45, position = "bottomleft", offset.x = 5,
        width = 170)
  
# Create HTML file
htmlwidgets::saveWidget(affiliation_map, file = "affiliations_1.html")