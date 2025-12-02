for filename in good/*
do
    # Check if the item is a regular file before processing it
    if [ -f "$filename" ]; then
        echo "--- Processing file: $filename ---"
        convert "./$filename" -resize 25% ./$filename-resized.hdr
    fi
done