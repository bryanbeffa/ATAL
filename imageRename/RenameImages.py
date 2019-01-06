#little program created for ATAL project
#Bryan Beffa
#version 20.12.2018
import os;

#global variable that rappresents directory's path
dir_path = "";

#global variable that rappresent files extension
file_ext = "";

#function for set the path of the images
def setPath():
    #check if the path is correct
    while True:
        #ask to user directory path
        print("\nInsert directory path: ");
        path = input();

        if os.path.isdir(path):
            #save in global variable the path
            global dir_path
            dir_path = path;
            break;
        else:
            print("The path doesn't exist");

#function used for get all files
def getFiles():
    global dir_path;
    return os.listdir(dir_path);

#function used for set new files names
def setFilesName(name, files, file_ext):
    id = 0;
    global dir_path;
    for file in files:
        new_file_name = dir_path + "/" + name + "_" + str(id) + "." + file_ext;
        old_file_name = dir_path + "/" + file;
        os.rename(old_file_name, new_file_name);
        id += 1;

#main code
def main():
    #set path
    setPath();

    #ask to user the new files names
    print("\nInsert new file name: ");
    filesName = input();

    #ask to user the files extension
    print("Insert file extension:")
    file_ext = input();

    #set new files name
    setFilesName(filesName, getFiles(), file_ext);

main();
