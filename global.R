knitr::opts_chunk$set(
  echo = FALSE,
  message = FALSE,
  warning = FALSE,
  results = 'asis'
)

library(readxl)
library(tidyverse)
library(kableExtra)
library(knitr)
library(xtable)

options(xtable.comment=FALSE)

today = format(Sys.Date(), "%B %d, %Y")

bold <- function(x) { paste0('BOLD', x) }
italic <- function(x) { paste0('ITALIC', x) }
url <- function(x) { paste0('URL', sanitize(x, type = "latex")) }

bold.somerows <- function(x) {
  x = gsub('BOLD(.*)',paste('\\\\textbf{\\1','}'),x)
}

italic.somerows <-
  function(x) gsub('ITALIC(.*)',paste('\\\\textit{\\1','}'),x)

newline.somerows <-
  function(x) gsub('NEWLINE',paste('\\\\newline'),x)

san_url <-
  function(x) gsub('URL(.*)', paste0('\\\\blueUrl{\\1','}'),x)

san_amp <-
  function(x) stringr::str_replace_all(x, "&", "\\\\&")

san_all <- function(x){
  x = bold.somerows(x)
  x = italic.somerows(x)
  x = newline.somerows(x)
  x = san_url(x)
  x = san_amp(x)
  return(x)
}

boldheader <- function(x) {paste0("{\\textbf{",x,"}}")}

name_rows = function(x) { paste0("{[", x, "]}") }


options(
  xtable.table.placement = "H",
  xtable.sanitize.text.function = san_all,
  xtable.sanitize.rownames.function = name_rows,
  xtable.latex.environments = "flushleft",
  xtable.hline.after = c(-1),
  xtable.caption.placement = "top",
  xtable.include.colnames = FALSE,
  xtable.include.rownames = FALSE,
  xtable.floating = FALSE,
  xtable.tabular.environment = "longtable"
)

create_table <- function(table = NULL, file_name = NULL, removeHeaders = TRUE, caption = NULL) {
  table <- table %>%
    kable(escape = FALSE, caption = caption) %>%
    kable_styling(bootstrap_options = c("hover"))
  
  if (removeHeaders) {
    table <- gsub("<thead>.*</thead>", "", table)
  }
  fileConn<-file(paste0('generated_html_files/',file_name))
  writeLines(table, fileConn)
  close(fileConn)
}
