function downloadFile(fileNumber) {
  const fileUrls = {
    1: 'files/TempCleaner.zip',
    2: 'path/to/file2.ext',
    3: 'path/to/file3.ext',
    4: 'path/to/file4.ext',
    5: 'path/to/file5.ext',
    6: 'path/to/file6.ext'
  };

  const url = fileUrls[fileNumber];
  if (url) {
    window.location.href = url;
  } else {
    alert("File URL not specified for this button.");
  }
}
