cd ../virtual_business_card/
npm run build
aws s3 rm s3://nfc-business-cards --recursive
aws s3 sync ./dist s3://nfc-business-cards