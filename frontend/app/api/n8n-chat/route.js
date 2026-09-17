import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL =
  'https://n8n.srv1106977.hstgr.cloud/webhook/d6347915-48ea-412a-8b88-fe04264f7eee/chat';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let headers = {};
    let body;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = formData;
    } else {
      body = await request.text();
      headers['Content-Type'] = contentType || 'application/json';
    }

    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers,
      body,
    });

    const data = await res.text();

    return new NextResponse(data, {
      status: res.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Proxy request failed' }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
