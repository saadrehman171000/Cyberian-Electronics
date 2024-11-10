import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      firstName, 
      lastName, 
      company, 
      email, 
      phone, 
      product, 
      quantity, 
      requirements, 
      timeline 
    } = body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'saadrehman17100@gmail.com',
      subject: 'New Quote Request',
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product Interest:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Additional Requirements:</strong></p>
        <p>${requirements}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Quote request sent successfully' });
  } catch (error) {
    console.error('Error sending quote request:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
} 