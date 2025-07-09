function generateNewFolderName(existingFolders) {
  const existingFolderNumber = existingFolders.length;
  const isNew = existingFolders.some((item) => item === 'New Folder');

  if (!existingFolderNumber) {
    return;
  }

  if (!isNew) {
    return 'New Folder';
  } else {
    let count = 2;
    function checkFolder() {
      let str = `New Folder (${count})`;
      let has = existingFolders.some((item) => item === str);
      if (has) {
        ++count;
        return checkFolder();
      } else {
        return str;
      }
    }
    return checkFolder();
  }
}

console.log(generateNewFolderName(['New Folder']));
